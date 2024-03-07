export enum PaymentPlansEntity {
  indexation = "indexation",
  enterprise = "enterprise",
  newbie = "newbie",
  "analytics/free" = "analytics/free",
  "analytics/beginner" = "analytics/beginner",
  "analytics/pro" = "analytics/pro",
  "analytics/enterprise" = "analytics/enterprise",
}

export const PaddlePlans = {
  /**
   * 
   * 
   * 
   * Indexation
   * 
   * 
   * 
   */
  "858335": {
    plan: PaymentPlansEntity.newbie,
    interval: "monthly",
    level: 1,
  },
  "858337": {
    plan: PaymentPlansEntity.newbie,
    interval: "yearly",
    level: 1,
  },
  "851087": {
    plan: PaymentPlansEntity.indexation,
    interval: "monthly",
    level: 2,
  },
  "855536": {
    plan: PaymentPlansEntity.indexation,
    interval: "yearly",
    level: 2,
  },
  "855460": {
    plan: PaymentPlansEntity.enterprise,
    interval: "monthly",
    level: 3,
  },
  "855537": {
    plan: PaymentPlansEntity.enterprise,
    interval: "yearly",
    level: 3,
  },
  /**
   * 
   * 
   * 
   * Analytics
   * 
   * 
   * 
   */
  "875973": {
    plan: PaymentPlansEntity["analytics/beginner"],
    interval: "monthly",
    level: 1,
  },
  "875978": {
    plan: PaymentPlansEntity["analytics/beginner"],
    interval: "yearly",
    level: 1,
  },

  "875975": {
    plan: PaymentPlansEntity["analytics/pro"],
    interval: "monthly",
    level: 2,
  },
  "875979": {
    plan: PaymentPlansEntity["analytics/pro"],
    interval: "yearly",
    level: 2,
  },

  "875976": {
    plan: PaymentPlansEntity["analytics/enterprise"],
    interval: "monthly",
    level: 3,
  },
  "875977": {
    plan: PaymentPlansEntity["analytics/enterprise"],
    interval: "yearly",
    level: 3,
  },
};

export type PaymentPricesEntity = {
  currency: string;
} & {
  [key in keyof typeof PaymentPlansEntity]: {
    monthly: number;
    yearly: number;
  };
};

export declare type ProductEntity = {
  applied_coupon: Array<string>;
  currency: string;
  list_price: {
    gross: number;
    net: number;
    tax: number;
  };
  price: {
    gross: number;
    net: number;
    tax: number;
  };
  product_id: number;
  product_title: string;
  subscription: {
    frequency: number;
    interval: string;
    list_price: {
      gross: number;
      net: number;
      tax: number;
    };
    price: {
      gross: number;
      net: number;
      tax: number;
    };
    trial_days: number;
  };
  vendor_set_prices_included_tax: boolean;
};

export type PaymentEntity = {
  id: string;
  fk_user_id: string;
  cancellation_effective_date: Date | null;
  subscription_id: string;
  cancel_url: string;
  update_url: string;
  created_at: Date;
  paddle_user_id: string;
  plan: PaymentPlansEntity;
  interval: "monthly" | "yearly";
};
