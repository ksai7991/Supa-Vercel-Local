-- Create employees table
create table public.employees2 (
    id serial primary key,
    name text not null,
    email text unique not null,
    position text,
    salary numeric
);

-- Enable Row Level Security
alter table public.employees2 enable row level security;

-- Add RLS policy: allow all users to read
create policy "allow read for all" 
    on public.employees2
    for select
    using (true);
