import { clerkMiddleware ,createRouteMatcher} from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/about(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  // Add other public routes here
])

export default clerkMiddleware(async (auth, req) => {
  // Safety check: If keys are missing, skip auth to prevent 500 errors
  // This allows the public site to load while environment variables are being configured
  const hasClerkKeys = 
    process.env.CLERK_SECRET_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!hasClerkKeys || process.env.CLERK_SECRET_KEY === 'dummy') {
    return;
  }
  
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};