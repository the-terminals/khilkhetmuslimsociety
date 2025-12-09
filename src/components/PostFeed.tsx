import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { posts, Post } from "@/data/posts";

export function PostFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="posts" className="py-16 md:py-20 bg-secondary/50">
      <div className="container px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-bengali">
              সাম্প্রতিক পোস্ট
            </h2>
            <p className="text-muted-foreground mt-1 font-bengali">ইসলামিক জ্ঞান ও অনুপ্রেরণা</p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Feed */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="flex-shrink-0 w-[320px] md:w-[380px] card-islamic p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date & Time */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-bengali">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.time}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-sm">
                <p className="text-foreground leading-relaxed line-clamp-6 whitespace-pre-line font-bengali">
                  {post.content}
                </p>
              </div>

              {/* Source if available */}
              {post.source && (
                <p className="mt-4 text-xs text-muted-foreground italic border-t border-border pt-3 font-bengali">
                  সূত্র: {post.source}
                </p>
              )}

              {/* Read More Button */}
              <div className="mt-4 pt-3 border-t border-border">
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="text-sm text-primary font-medium hover:underline font-bengali transition-colors hover:text-primary/80"
                >
                  সম্পূর্ণ পড়ুন →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">পোস্ট বিস্তারিত</DialogTitle>
          </DialogHeader>
          
          {selectedPost && (
            <div className="space-y-4">
              {/* Date & Time */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-bengali">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {selectedPost.time}
                </span>
              </div>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-line font-bengali text-base md:text-lg">
                  {selectedPost.content}
                </p>
              </div>

              {/* Source if available */}
              {selectedPost.source && (
                <p className="text-sm text-muted-foreground italic border-t border-border pt-4 font-bengali">
                  সূত্র: {selectedPost.source}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
