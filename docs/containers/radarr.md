---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag7547" onclick="CopyToClipboard('tag7547');return false;" class="tag-decoration">nightly</div><div id="tag32492" onclick="CopyToClipboard('tag32492');return false;" class="tag-decoration">nightly-65451d8</div><div id="tag11417" onclick="CopyToClipboard('tag11417');return false;" class="tag-decoration">nightly-7.1.0.10948</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/65451d8f707492a131efaacfd593fb853fc01265" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45539157745" target="_blank">2026-11-25 03:19:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4351" onclick="CopyToClipboard('tag4351');return false;" class="tag-decoration">release</div><div id="tag32423" onclick="CopyToClipboard('tag32423');return false;" class="tag-decoration">release-7ac8359</div><div id="tag22070" onclick="CopyToClipboard('tag22070');return false;" class="tag-decoration">release-7.0.3.10918</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7ac8359c5821b975ba05c507e3c3f47004f4be41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45475068876" target="_blank">2026-11-24 19:53:58</a></td></tr>
<tr><td><div id="tag28460" onclick="CopyToClipboard('tag28460');return false;" class="tag-decoration">testing</div><div id="tag19788" onclick="CopyToClipboard('tag19788');return false;" class="tag-decoration">testing-6d56d69</div><div id="tag25759" onclick="CopyToClipboard('tag25759');return false;" class="tag-decoration">testing-7.1.0.10948</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/6d56d6988a2ffd3e917945f53c94bbb2c5d212e9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45475109509" target="_blank">2026-11-24 19:54:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
