export interface Feedback {
    id: number,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string
}

const initialState: { feedbacks: Feedback [] } = {
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

export const reducer= (state= {feedbacks: []}, action: any) => {
switch (action.type) {
    case "FEEDBACK_REQUEST":
        return {loading: true, feedbacks: []};
    case "FEEDBACKS_SUCCESS":
        return {loading: true, feedbacks: action.payload};
}
}

export default initialState;
