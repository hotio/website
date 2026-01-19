---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29798" onclick="CopyToClipboard('tag29798');return false;" class="tag-decoration">release</div><div id="tag21628" onclick="CopyToClipboard('tag21628');return false;" class="tag-decoration">release-cd733a1</div><div id="tag8350" onclick="CopyToClipboard('tag8350');return false;" class="tag-decoration">release-8.3.0</div><div id="tag5675" onclick="CopyToClipboard('tag5675');return false;" class="tag-decoration">release-v8</div><div id="tag6070" onclick="CopyToClipboard('tag6070');return false;" class="tag-decoration">release-v8.3</div><div id="tag11710" onclick="CopyToClipboard('tag11710');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/cd733a1f44a29c9f46e06d83661615929f5496b2" target="_blank">Upstream update: noblevpn-9c33abd => noblevpn-db01928</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21113696193" target="_blank">2026-01-18 14:57:01</a></td></tr>
<tr><td><div id="tag29235" onclick="CopyToClipboard('tag29235');return false;" class="tag-decoration">testing</div><div id="tag2526" onclick="CopyToClipboard('tag2526');return false;" class="tag-decoration">testing-5fc4859</div><div id="tag16523" onclick="CopyToClipboard('tag16523');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag11963" onclick="CopyToClipboard('tag11963');return false;" class="tag-decoration">testing-v8</div><div id="tag4614" onclick="CopyToClipboard('tag4614');return false;" class="tag-decoration">testing-v8.3</div><div id="tag18177" onclick="CopyToClipboard('tag18177');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5fc485993b52923a332ed6c027a1446ceddd4903" target="_blank">Upstream update: noblevpn-db01928 => noblevpn-a3516fa</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21124042179" target="_blank">2026-01-19 03:13:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
