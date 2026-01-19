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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13526" onclick="CopyToClipboard('tag13526');return false;" class="tag-decoration">release</div><div id="tag26482" onclick="CopyToClipboard('tag26482');return false;" class="tag-decoration">release-937ef79</div><div id="tag8491" onclick="CopyToClipboard('tag8491');return false;" class="tag-decoration">release-0.24.879</div><div id="tag13228" onclick="CopyToClipboard('tag13228');return false;" class="tag-decoration">release-v0</div><div id="tag31009" onclick="CopyToClipboard('tag31009');return false;" class="tag-decoration">release-v0.24</div><div id="tag1219" onclick="CopyToClipboard('tag1219');return false;" class="tag-decoration">release-v0.24.879</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/937ef790ff1d13f5beebaedcdd533a3ecab08281" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21124036764" target="_blank">2026-01-19 03:13:11</a></td></tr>
<tr><td><div id="tag21250" onclick="CopyToClipboard('tag21250');return false;" class="tag-decoration">testing</div><div id="tag32746" onclick="CopyToClipboard('tag32746');return false;" class="tag-decoration">testing-933440a</div><div id="tag610" onclick="CopyToClipboard('tag610');return false;" class="tag-decoration">testing-0.24.887</div><div id="tag7337" onclick="CopyToClipboard('tag7337');return false;" class="tag-decoration">testing-v0</div><div id="tag27061" onclick="CopyToClipboard('tag27061');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10191" onclick="CopyToClipboard('tag10191');return false;" class="tag-decoration">testing-v0.24.887</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/933440a8c5693e0e18c0c183c784efccc26a03cb" target="_blank">Version update: 0.24.879 => 0.24.887</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21127980046" target="_blank">2026-01-19 06:46:54</a></td></tr>
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
