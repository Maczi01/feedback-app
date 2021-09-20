export interface Feedback {
    id: number,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string
}

type FeedbacksState = {
    feedbacks: Feedback[]
}

export const initialState: FeedbacksState = {
  feedbacks: [
    {
      id: 1,
      title: 'Add tags for solutions',
      category: 'enhancement',
      upvotes: 112,
      status: 'suggestion',
      description: 'Easier to search for solutions based on a specific stack.',
    },
  ],
};

export const rootReducer = (
  state: FeedbacksState = initialState,
  action: any,
) => {
  console.log('redux!');
  return null;
};
