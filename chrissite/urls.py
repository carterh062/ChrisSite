from django.conf.urls import patterns, include, url
from homeApp.views import home_view
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$',home_view),
    url(r'^admin/', include(admin.site.urls))
    # url(r'^$', 'chrissite.views.home', name='home'),
    # url(r'^chrissite/', include('chrissite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
