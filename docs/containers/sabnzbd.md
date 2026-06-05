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
<tr><td><div id="tag27312" onclick="CopyToClipboard('tag27312');return false;" class="tag-decoration">nightly</div><div id="tag5814" onclick="CopyToClipboard('tag5814');return false;" class="tag-decoration">nightly-887fe31</div><div id="tag19356" onclick="CopyToClipboard('tag19356');return false;" class="tag-decoration">nightly-0950393b8223aa1783984a4d58e2fecb398d2ebc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/887fe31190f5f5c549708ddde697190c74eb638a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27015222862" target="_blank">2026-06-05 12:36:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1464" onclick="CopyToClipboard('tag1464');return false;" class="tag-decoration">release</div><div id="tag5662" onclick="CopyToClipboard('tag5662');return false;" class="tag-decoration">release-d9901aa</div><div id="tag27129" onclick="CopyToClipboard('tag27129');return false;" class="tag-decoration">release-5.0.3</div><div id="tag28827" onclick="CopyToClipboard('tag28827');return false;" class="tag-decoration">release-v5</div><div id="tag21472" onclick="CopyToClipboard('tag21472');return false;" class="tag-decoration">release-v5.0</div><div id="tag12604" onclick="CopyToClipboard('tag12604');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag8991" onclick="CopyToClipboard('tag8991');return false;" class="tag-decoration">testing</div><div id="tag2442" onclick="CopyToClipboard('tag2442');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag9236" onclick="CopyToClipboard('tag9236');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag11967" onclick="CopyToClipboard('tag11967');return false;" class="tag-decoration">testing-v5</div><div id="tag18890" onclick="CopyToClipboard('tag18890');return false;" class="tag-decoration">testing-v5.0</div><div id="tag22526" onclick="CopyToClipboard('tag22526');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
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
