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
  action: string,
    type:string
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
    {
      id: 3,
      title: 'Best chair ever',
      description: 'Nice chair for playing. Easy to assembly',
      productId: 3,
      userId: 2,
      date: '09.03.2019',
      grade: 5,
    },
  ],
};

export const feedbackReducer = (
  state: FeedbacksState = initialState,
  action: Action,
):FeedbacksState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state;
    default:
      return state;
  }
};
