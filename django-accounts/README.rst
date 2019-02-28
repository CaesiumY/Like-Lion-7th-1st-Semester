========
Accounts
========

Accounts has django-based login and signup functions.
And also included a social login such as Google
which means you need pre-settings to use this package.

Detailed documentation is in the "docs" directory.

INSTALL
-------

pip install --user django-accounts/dist/django-accounts-0.1.tar.gz


UNINSTALL
---------

pip uninstall django-accounts


Quick start
-----------

1. Add "accounts" or "accounts.apps.AccountsConfig" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'polls',
        'accounts.apps.AccountsConfig',
    ]

2. Include the polls URLconf in your project urls.py like this::

    path('accounts/', include('accounts.urls')),

3. Run `python manage.py migrate` to create the polls models.

4. Start the development server and visit http://127.0.0.1:8000/admin/
   to register a API Key (you'll need the Admin app enabled).

5. Visit http://127.0.0.1:8000/accounts/ to participate in the poll.



