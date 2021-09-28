module ApplicationHelper
    def show_list_users          
        if user_role == "super_admin"
        @users = User.where.not({ role: "super_admin"})
        else user_role == "head_nurse"
          @users = User.where({ role: "nurse"})
        end
    end
end
