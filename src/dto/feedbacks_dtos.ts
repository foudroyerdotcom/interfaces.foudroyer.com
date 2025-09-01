export const feedbacks_dtos_endpoints = {
  submit_nps_score: "/feedbacks/submit_nps_score",
  fetch_nps_scores: "/feedbacks/fetch_nps_scores",
  should_ask_nps_score: "/feedbacks/should_ask_nps_score",
} as const;

type NpsScore = {
  id: string;
  score: number;
  created_at: Date;
};

export type feedbacks_dtos = {
  submit_nps_score: {
    url: typeof feedbacks_dtos_endpoints.submit_nps_score;
    input: {
      score: number;
    };
    output: NpsScore;
  };
  fetch_nps_scores: {
    url: typeof feedbacks_dtos_endpoints.fetch_nps_scores;
    input: {};
    output: NpsScore[];
  };
  should_ask_nps_score: {
    url: typeof feedbacks_dtos_endpoints.should_ask_nps_score;
    input: {};
    output: {
      should_ask: boolean;
    };
  };
};
