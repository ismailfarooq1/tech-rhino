<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@itsolutionstuff.com',
                'password' => bcrypt('abc123'),
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@itsolutionstuff.com',
                'password' => bcrypt('abc123'),
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
