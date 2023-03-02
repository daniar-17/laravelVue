<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // insert data ke table person
        DB::table('persons')->insert([
        	'first_name' => 'Joni',
        	'last_name' => 'Web Designer',
        ]);
    }
}
