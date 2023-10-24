export enum PaymentPlansEntity {
    indexation = "indexation",
    keywords = "keywords",
    analytics = "analytics",
    enterprise = "enterprise",
    all = "all"
}

export declare type ProductEntity = {
    applied_coupon: Array<string>
    currency: string
    list_price: {
      gross: number
      net: number
      tax: number
    }
    price: {
      gross: number
      net: number
      tax: number
    }
    product_id: number
    product_title: string
    subscription: {
      frequency: number
      interval: string
      list_price: {
        gross: number
        net: number
        tax: number
      }
      price: {
        gross: number
        net: number
        tax: number
      }
      trial_days: number
    }
    vendor_set_prices_included_tax: boolean
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
  
