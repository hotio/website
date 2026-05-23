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
<tr><td><div id="tag11243" onclick="CopyToClipboard('tag11243');return false;" class="tag-decoration">nightly</div><div id="tag16630" onclick="CopyToClipboard('tag16630');return false;" class="tag-decoration">nightly-cf2c63a</div><div id="tag27125" onclick="CopyToClipboard('tag27125');return false;" class="tag-decoration">nightly-2f4750f77d053665b50556f82852d5cb791a1737</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf2c63a2a6ce0ae3326661bf111f126121078f87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26311016474" target="_blank">2026-05-22 20:43:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9054" onclick="CopyToClipboard('tag9054');return false;" class="tag-decoration">release</div><div id="tag6345" onclick="CopyToClipboard('tag6345');return false;" class="tag-decoration">release-d9901aa</div><div id="tag8518" onclick="CopyToClipboard('tag8518');return false;" class="tag-decoration">release-5.0.3</div><div id="tag1484" onclick="CopyToClipboard('tag1484');return false;" class="tag-decoration">release-v5</div><div id="tag4084" onclick="CopyToClipboard('tag4084');return false;" class="tag-decoration">release-v5.0</div><div id="tag19279" onclick="CopyToClipboard('tag19279');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag4122" onclick="CopyToClipboard('tag4122');return false;" class="tag-decoration">testing</div><div id="tag24222" onclick="CopyToClipboard('tag24222');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag148" onclick="CopyToClipboard('tag148');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag6639" onclick="CopyToClipboard('tag6639');return false;" class="tag-decoration">testing-v5</div><div id="tag19272" onclick="CopyToClipboard('tag19272');return false;" class="tag-decoration">testing-v5.0</div><div id="tag17238" onclick="CopyToClipboard('tag17238');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
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
