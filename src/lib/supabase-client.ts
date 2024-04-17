import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient<Database>(
  "https://odtdjjfbamcmuoextxqd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kdGRqamZiYW1jbXVvZXh0eHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODQxNTMsImV4cCI6MjAyODg2MDE1M30.x--IEMJqISK_gqY4WFP6QJQs21LHSV_S-R2H29-rBB0"
);

export default supabase;
