---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12741" onclick="CopyToClipboard('tag12741');return false;" class="tag-decoration">release</div><div id="tag31582" onclick="CopyToClipboard('tag31582');return false;" class="tag-decoration">release-d19cd81</div><div id="tag29909" onclick="CopyToClipboard('tag29909');return false;" class="tag-decoration">release-0.24.1485</div><div id="tag29401" onclick="CopyToClipboard('tag29401');return false;" class="tag-decoration">release-v0</div><div id="tag4196" onclick="CopyToClipboard('tag4196');return false;" class="tag-decoration">release-v0.24</div><div id="tag8462" onclick="CopyToClipboard('tag8462');return false;" class="tag-decoration">release-v0.24.1485</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d19cd81639e56585aeea50928113dbec908e3840" target="_blank">Version update: 0.24.1474 => 0.24.1485</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23703433019" target="_blank">2026-03-29 06:44:23</a></td></tr>
<tr><td><div id="tag13890" onclick="CopyToClipboard('tag13890');return false;" class="tag-decoration">testing</div><div id="tag12489" onclick="CopyToClipboard('tag12489');return false;" class="tag-decoration">testing-4d1c2f5</div><div id="tag12894" onclick="CopyToClipboard('tag12894');return false;" class="tag-decoration">testing-0.24.1489</div><div id="tag26288" onclick="CopyToClipboard('tag26288');return false;" class="tag-decoration">testing-v0</div><div id="tag22919" onclick="CopyToClipboard('tag22919');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8062" onclick="CopyToClipboard('tag8062');return false;" class="tag-decoration">testing-v0.24.1489</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4d1c2f5a2c6332b6694344e4dcda76a5e2610ff7" target="_blank">Version update: 0.24.1485 => 0.24.1489</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23733829126" target="_blank">2026-03-30 07:49:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
