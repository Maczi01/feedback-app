export interface Feedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}

interface Action {
  action: string
}

type FeedbacksState = {
  feedbacks: Feedback[];
};

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
    {
      id: 2,
      title: 'Add more buttons',
      category: 'enhancement',
      upvotes: 136,
      status: 'suggestion',
      description: 'Easier to search for solutions based on a specific stack.',
    },
  ],
};

export const rootReducer = (
  state: FeedbacksState = initialState,
  action: Action,
) => state;
