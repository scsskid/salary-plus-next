export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Jobs: {
        Row: {
          created_at: string
          id: number
          simple_wage: number
          title: string
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          simple_wage: number
          title: string
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          simple_wage?: number
          title?: string
          user_id?: number
        }
        Relationships: []
      }
      Users: {
        Row: {
          created_at: string
          email: string
          id: number
          password: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          password: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          password?: string
        }
        Relationships: []
      }
      Wages: {
        Row: {
          amount: number
          created_at: string
          id: number
          interval_type: string
          job_id: number
        }
        Insert: {
          amount: number
          created_at?: string
          id?: number
          interval_type?: string
          job_id: number
        }
        Update: {
          amount?: number
          created_at?: string
          id?: number
          interval_type?: string
          job_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Wages_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "Jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      WorkingEntries: {
        Row: {
          begin: string
          created_at: string
          end: string
          id: number
          job_id: number
          sick_leave: boolean
          user_id: number
        }
        Insert: {
          begin: string
          created_at?: string
          end: string
          id?: number
          job_id: number
          sick_leave?: boolean
          user_id: number
        }
        Update: {
          begin?: string
          created_at?: string
          end?: string
          id?: number
          job_id?: number
          sick_leave?: boolean
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "WorkingEntries_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "Jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "WorkingEntries_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
