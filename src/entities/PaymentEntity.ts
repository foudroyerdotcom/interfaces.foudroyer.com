export enum PaymentPlansEntity {
    indexation = "indexation",
    enterprise = "enterprise",
    newbie = "newbie",
    "analytics/free" = "analytics/free",
    "analytics/beginner" = "analytics/beginner",
    "analytics/pro" = "analytics/pro",
    "analytics/enterprise" = "analytics/enterprise"
}

export type PaymentPricesEntity = {
  currency: string
} & {
    [key in keyof typeof PaymentPlansEntity]: {
        monthly: number
        yearly: number
    }
};

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

export enum PaymentScope {
    analytics = 'analytics',
    indexation = 'indexation'
}

export type PaymentEntity = {
    id: string;
    fk_user_id: string;
    scope: PaymentScope;
    cancellation_effective_date: Date | null;
    subscription_id: string;
    cancel_url: string;
    update_url: string;
    created_at: Date;
    paddle_user_id: string;
    plan: PaymentPlansEntity;
    interval: "monthly" | "yearly";
};
  
