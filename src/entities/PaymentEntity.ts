export type PaymentEntity = {
    pfk_website_id: string;
    fk_user_id: string;
    cancellation_effective_date: Date | null;
    subscription_id: string;
    cancel_url: string;
    update_url: string;
    paddle_user_id: string;
};
  