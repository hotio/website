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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8147" onclick="CopyToClipboard('tag8147');return false;" class="tag-decoration">release</div><div id="tag22062" onclick="CopyToClipboard('tag22062');return false;" class="tag-decoration">release-43b12f9</div><div id="tag8721" onclick="CopyToClipboard('tag8721');return false;" class="tag-decoration">release-0.24.2043</div><div id="tag559" onclick="CopyToClipboard('tag559');return false;" class="tag-decoration">release-v0</div><div id="tag10903" onclick="CopyToClipboard('tag10903');return false;" class="tag-decoration">release-v0.24</div><div id="tag29799" onclick="CopyToClipboard('tag29799');return false;" class="tag-decoration">release-v0.24.2043</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/43b12f98fde9a936f86c25993f0f2084b355030f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27273243350" target="_blank">2026-06-10 11:32:06</a></td></tr>
<tr><td><div id="tag27237" onclick="CopyToClipboard('tag27237');return false;" class="tag-decoration">testing</div><div id="tag4717" onclick="CopyToClipboard('tag4717');return false;" class="tag-decoration">testing-030adcf</div><div id="tag774" onclick="CopyToClipboard('tag774');return false;" class="tag-decoration">testing-0.24.2043</div><div id="tag24385" onclick="CopyToClipboard('tag24385');return false;" class="tag-decoration">testing-v0</div><div id="tag28994" onclick="CopyToClipboard('tag28994');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15758" onclick="CopyToClipboard('tag15758');return false;" class="tag-decoration">testing-v0.24.2043</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/030adcf4229a6fbdb1fecb64505061e17dbf2098" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27259145183" target="_blank">2026-06-10 07:01:04</a></td></tr>
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
