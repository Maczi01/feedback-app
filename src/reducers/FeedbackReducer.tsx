export interface Feedback {
    id: number;
    title: string;
    description: string;
    productId: number;
    userId: number;
    date: string;
    grade: number
}

type Action = AddFeedbackAction | RemoveFeedbackAction

// export interface Action {
//     type: string,
//     payload: Feedback
// }

export interface AddFeedbackAction {
    type: 'ADD_FEEDBACK',
    payload: Feedback
}

export interface RemoveFeedbackAction {
    type: 'REMOVE_FEEDBACK',
    payload: { id: number }
}

type FeedbacksState = {
    feedbacks: Feedback[];
};

const initialState: FeedbacksState = {
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
): FeedbacksState => {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return { feedbacks: [...state.feedbacks, action.payload] };
    case 'REMOVE_FEEDBACK':
      return {
        feedbacks: [...state.feedbacks
          .filter((feedback: Feedback) => feedback.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
