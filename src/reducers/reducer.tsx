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


// export const someAction = {type: "ADD_FEEDBACK", payload: {id: 1, title: "good"}}

export const feedbacksReducer = (
    state: FeedbacksState = initialState,
    action: any) => {
    switch (action.type) {
        case "FEEDBACK_REQUEST":
            return {loading: true, feedbacks: []};
        case "FEEDBACKS_SUCCESS":
            return {loading: true, feedbacks: action.payload};
    }
}

