export enum PaymentPlansEntity {
    indexation = "indexation",
    keywords = "keywords",
    analytics = "analytics",
    all = "all"
}

export type PaymentEntity = {
    id: string;
    fk_user_id: string;
    cancellation_effective_date: Date | null;
    subscription_id: string;
    cancel_url: string;
    update_url: string;
    created_at: Date;
    paddle_user_id: string;
    plan: PaymentPlansEntity
};
  
