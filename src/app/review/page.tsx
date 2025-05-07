import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://thesmokingbee.com/review' },
  title: 'Leave a review | The Smoking Bee, Smoke Shop Near La Mesa, Best Smoke Shop',
  description:
    'Tell us how we did and help us improve our La Mesa smoke-shop experience. Was our staff friendly, did we have a great selection?',
};

export default function ReviewPage() {
  // server components can return client ones
  return <ReviewClient />;
}
