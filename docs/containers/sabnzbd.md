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
<tr><td><div id="tag21747" onclick="CopyToClipboard('tag21747');return false;" class="tag-decoration">nightly</div><div id="tag10406" onclick="CopyToClipboard('tag10406');return false;" class="tag-decoration">nightly-e019363</div><div id="tag29" onclick="CopyToClipboard('tag29');return false;" class="tag-decoration">nightly-25d20f0f08ce2078402faf0e7b281db9ceb04643</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e019363323c2543e82221f47c0d48879de04b540" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26344526481" target="_blank">2026-05-23 21:53:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29901" onclick="CopyToClipboard('tag29901');return false;" class="tag-decoration">release</div><div id="tag8460" onclick="CopyToClipboard('tag8460');return false;" class="tag-decoration">release-d9901aa</div><div id="tag25828" onclick="CopyToClipboard('tag25828');return false;" class="tag-decoration">release-5.0.3</div><div id="tag22262" onclick="CopyToClipboard('tag22262');return false;" class="tag-decoration">release-v5</div><div id="tag599" onclick="CopyToClipboard('tag599');return false;" class="tag-decoration">release-v5.0</div><div id="tag27491" onclick="CopyToClipboard('tag27491');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag10944" onclick="CopyToClipboard('tag10944');return false;" class="tag-decoration">testing</div><div id="tag8611" onclick="CopyToClipboard('tag8611');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag27851" onclick="CopyToClipboard('tag27851');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag26534" onclick="CopyToClipboard('tag26534');return false;" class="tag-decoration">testing-v5</div><div id="tag19187" onclick="CopyToClipboard('tag19187');return false;" class="tag-decoration">testing-v5.0</div><div id="tag8300" onclick="CopyToClipboard('tag8300');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
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
