---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19199" onclick="CopyToClipboard('tag19199');return false;" class="tag-decoration">nightly</div><div id="tag12148" onclick="CopyToClipboard('tag12148');return false;" class="tag-decoration">nightly-cf41fff</div><div id="tag6691" onclick="CopyToClipboard('tag6691');return false;" class="tag-decoration">nightly-fec57377dbc2a912a89ebdd33293723c55926411</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf41fffce5c3e2dd2106e31d0a04805e92ef77a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26339701904" target="_blank">2026-05-23 18:00:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9849" onclick="CopyToClipboard('tag9849');return false;" class="tag-decoration">release</div><div id="tag14514" onclick="CopyToClipboard('tag14514');return false;" class="tag-decoration">release-d9901aa</div><div id="tag31296" onclick="CopyToClipboard('tag31296');return false;" class="tag-decoration">release-5.0.3</div><div id="tag3286" onclick="CopyToClipboard('tag3286');return false;" class="tag-decoration">release-v5</div><div id="tag19482" onclick="CopyToClipboard('tag19482');return false;" class="tag-decoration">release-v5.0</div><div id="tag24848" onclick="CopyToClipboard('tag24848');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag24763" onclick="CopyToClipboard('tag24763');return false;" class="tag-decoration">testing</div><div id="tag13783" onclick="CopyToClipboard('tag13783');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag16743" onclick="CopyToClipboard('tag16743');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag5884" onclick="CopyToClipboard('tag5884');return false;" class="tag-decoration">testing-v5</div><div id="tag13075" onclick="CopyToClipboard('tag13075');return false;" class="tag-decoration">testing-v5.0</div><div id="tag26877" onclick="CopyToClipboard('tag26877');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
