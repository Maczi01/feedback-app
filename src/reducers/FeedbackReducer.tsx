export interface Feedback {
  id: number;
  title: string;
  description: string;
  productId: number;
  userId: number;
  date: string;
  grade: number
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
      description: 'Easier to search for solutions based on a specific stack.',
      productId: 1,
      userId: 1,
      date: '09.02.2019',
      grade: 5,
    },
    {
      id: 2,
      title: 'Very good glass',
      description: 'Easier to search for solutions based on a specific stack.',
      productId: 2,
      userId: 1,
      date: '09.02.2019',
      grade: 4,
    },
  ],
};

export const feedbackReducer = (
  state: FeedbacksState = initialState,
  action: Action,
):FeedbacksState => state;