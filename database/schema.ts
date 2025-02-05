import { date, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED']);
export const ROLE_ENUM = pgEnum('role', ['ADMIN', 'USER']);
export const BORROW_STATUS_ENUM = pgEnum('borrow_status', ['BORROWED', 'RETURNED'])

export const users = pgTable('users', {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar('full_name', {length: 255}).notNull(),
    email: text('email').notNull().unique(),
    universityId: integer("university_id").notNull().unique(),
    password: text('password').notNull(),
    universityCard: text('university_card'),
    status: STATUS_ENUM('status').default('PENDING'),
    role: ROLE_ENUM('role').default('USER'),
    lastActivityDate: date('last_acticity_date').defaultNow(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
    }).notNull().defaultNow(),

})

// export type InsertUser = typeof usersTable.$inferInsert;
// export type SelectUser = typeof usersTable.$inferSelect;

// export type InsertPost = typeof postsTable.$inferInsert;
// export type SelectPost = typeof postsTable.$inferSelect;
