export interface Feedback {
    id: number;
    title: string;
    description: string;
    product: {
        id: number,
        name: string
    };
    user: {
        id: number,
        name: string
    };
    date: string;
    grade: number | null
}

type Action = AddFeedbackAction | RemoveFeedbackAction | GetFeedbacks | FeedbacksList

export interface AddFeedbackAction {
    type: 'ADD_FEEDBACK',
    payload: Feedback
}

export interface RemoveFeedbackAction {
    type: 'REMOVE_FEEDBACK',
    payload: { id: number }
}

export interface GetFeedbacks {
    type: 'FEEDBACKS_REQUEST',
}

export interface FeedbacksList {
    type: 'FEEDBACKS_SUCCESS',
    payload: Feedback[]
}

type FeedbacksState = {
    feedbacks: Feedback[];
};
// TODO loading and  error
export const feedbackReducer = (
  state: FeedbacksState = { feedbacks: [] },
  action: Action,
): FeedbacksState => {
  switch (action.type) {
    case 'FEEDBACKS_REQUEST':
      return { feedbacks: [] };
    case 'FEEDBACKS_SUCCESS':
      return { feedbacks: action.payload };
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

// const initialState: FeedbacksState = {
//     feedbacks: [
//         {
//             id: 1,
//             title: 'Add tags for solutions',
//             description: 'Easier to search for solutions based on a specific stack.',
//             productId: 1,
//             userId: 1,
//             date: '09.02.2019',
//             grade: 5,
//         },
//         {
//             id: 2,
//             title: 'Very good glass',
//             description: 'Easier to search for solutions based on a specific stack.',
//             productId: 2,
//             userId: 1,
//             date: '09.02.2019',
//             grade: 4,
//         },
//     ],
// };
