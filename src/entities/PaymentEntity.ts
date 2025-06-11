export enum PaymentPlansEntity {
  "indexation/free" = "indexation/free",
  indexation = "indexation",
  enterprise = "enterprise",
  newbie = "newbie",
  "indexation/teams" = "indexation/teams",
  "analytics/free" = "analytics/free",
  "analytics/beginner" = "analytics/beginner",
  "analytics/pro" = "analytics/pro",
  "analytics/enterprise" = "analytics/enterprise",
}

export const PaddlePlans: {
  [key: string]: { 
    plan: PaymentPlansEntity; 
    interval: "monthly" | "yearly" | "lifetime",
    scope: "indexation" | "analytics",
    level: number
    id: string
  };
} = {
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
    scope: "indexation",
    id: "858335"
  },
  "858337": {
    plan: PaymentPlansEntity.newbie,
    interval: "yearly",
    level: 1,
    scope: "indexation",
    id: "858337"
  },

  "851087": {
    plan: PaymentPlansEntity.indexation,
    interval: "monthly",
    level: 2,
    scope: "indexation",
    id: "851087"
  },
  "855536": {
    plan: PaymentPlansEntity.indexation,
    interval: "yearly",
    level: 2,
    scope: "indexation",
    id: "855536"
  },
  "911773": {
    plan: PaymentPlansEntity.indexation,
    interval: "lifetime",
    level: 2,
    scope: "indexation",
    id: "911773" 
  },
 "884404": {
    plan: PaymentPlansEntity["indexation/teams"],
    interval: "monthly",
    level: 3,
    scope: "indexation",
    id: "884404"
  },
  "884406": {
    plan: PaymentPlansEntity["indexation/teams"],
    interval: "yearly",
    level: 3,
    scope: "indexation",
    id: "884406"
  },
  "855460": {
    plan: PaymentPlansEntity.enterprise,
    interval: "monthly",
    level: 4,
    scope: "indexation",
    id: "855460"
  },
  "855537": {
    plan: PaymentPlansEntity.enterprise,
    interval: "yearly",
    level: 4,
    scope: "indexation",
    id: "855537"
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
    scope: "analytics",
    level: 1,
    id: "875973"
  },
  "875978": {
    plan: PaymentPlansEntity["analytics/beginner"],
    interval: "yearly",
    level: 1,
    scope: "analytics",
    id: "875978"
  },

  "875975": {
    plan: PaymentPlansEntity["analytics/pro"],
    interval: "monthly",
    level: 2,
    scope: "analytics",
    id: "875975"
  },
  "875979": {
    plan: PaymentPlansEntity["analytics/pro"],
    interval: "yearly",
    level: 2,
    scope: "analytics",
    id: "875979"
  },

  "875976": {
    plan: PaymentPlansEntity["analytics/enterprise"],
    interval: "monthly",
    level: 3,
    scope: "analytics",
    id: "875976"
  },
  "875977": {
    plan: PaymentPlansEntity["analytics/enterprise"],
    interval: "yearly",
    level: 3,
    scope: "analytics",
    id: "875977",
  },
};

export const findPlanByNameAndInterval = (params: {
  interval: string;
  planName: string;
}) => {
  const keys = Object.keys(PaddlePlans);

  const planId = keys.find((key: keyof typeof PaddlePlans) => {
    const plan = PaddlePlans[key];
    if (plan.interval === params.interval && plan.plan === params.planName)
      return true;
    return false;
  });

  return PaddlePlans[planId];
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
  interval: "monthly" | "yearly" | "lifetime";
  paused_at: Date | null;
};
