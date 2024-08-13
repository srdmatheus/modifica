export const FileConverterSkeleton = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border p-6">
      <div className="h-8 w-80 animate-pulse rounded-full bg-foreground-muted/10" />
      <div className="h-8 w-60 animate-pulse rounded-full bg-foreground-muted/10" />
      <div className="h-10 w-10 animate-pulse rounded-2xl bg-foreground-muted/10" />
    </div>
  );
};
