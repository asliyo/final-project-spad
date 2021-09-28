require 'rails_helper'
require 'spec_helper'

RSpec.describe UsersController, type: :controller do
   let(:response_json) { JSON.parse(response.body) }

   describe 'GET /status' do
      it 'returns a status msg' do
         get 'index'

         expect(response.status).to eql(200)
      end

      it 'renders the user if users exist' do 
         user  = User.create(username: 'test_user', email: 'test2@test.com', password: '12345', password_confirmation: '12345', role: 'super_admin')
         get('index', params: { role: 'super_admin'})

         expect(response.body).to include user.to_json
      end

      it 'renders error message if users do not exist' do
         allow(User).to receive(:all).and_return([])
         get('index', params: { role: 'super_admin'})

         expect(response_json['errors'].first).to eq('no users found')
      end
   end

   describe 'show users' do
      it 'returns user details' do
         user  = User.create(username: 'test_user', email: 'test2@test.com', password: '12345', password_confirmation: '12345')

         get('show', params: { id: user.id})

         expect(response.body).to include user.to_json
      end

      it 'renders error message if user do not exist' do
         user  = User.create(username: 'test_user', email: 'test2@test.com', password: '12345', password_confirmation: '12345')

         allow(User).to receive(:find).and_return([])
         get('show', params: { id: user.id})

         expect(response_json['errors'].first).to eq('user not found')
      end
   end

   describe 'create new user' do
      it 'saves valid user' do 
         user  = {'username'=>'test_user', 'email'=>'test2@test.com', 'password'=>'12345', 'password_confirmation'=>'12345'}

         expect {
           post('create', params: { user: user })
         }.to change { User.count }.by(1)
      end

      it 'returns error message on invalid user input' do 
         user  = {'username'=>'', 'email'=>'', 'password'=>'', 'password_confirmation'=>''}

         expect {
           post('create', params: { user: user })
         }.not_to change { User.count }
      end
   end
end