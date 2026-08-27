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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14638" onclick="CopyToClipboard('tag14638');return false;" class="tag-decoration">release</div><div id="tag11401" onclick="CopyToClipboard('tag11401');return false;" class="tag-decoration">release-7abd7f4</div><div id="tag6272" onclick="CopyToClipboard('tag6272');return false;" class="tag-decoration">release-0.24.2481</div><div id="tag13589" onclick="CopyToClipboard('tag13589');return false;" class="tag-decoration">release-v0</div><div id="tag21474" onclick="CopyToClipboard('tag21474');return false;" class="tag-decoration">release-v0.24</div><div id="tag6891" onclick="CopyToClipboard('tag6891');return false;" class="tag-decoration">release-v0.24.2481</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7abd7f4acc11915f7eb88e51be1fbe6d72f7a4ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33076644931" target="_blank">2026-08-27 13:24:15</a></td></tr>
<tr><td><div id="tag8763" onclick="CopyToClipboard('tag8763');return false;" class="tag-decoration">testing</div><div id="tag2226" onclick="CopyToClipboard('tag2226');return false;" class="tag-decoration">testing-33cc099</div><div id="tag31580" onclick="CopyToClipboard('tag31580');return false;" class="tag-decoration">testing-0.24.2475</div><div id="tag13557" onclick="CopyToClipboard('tag13557');return false;" class="tag-decoration">testing-v0</div><div id="tag7179" onclick="CopyToClipboard('tag7179');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1462" onclick="CopyToClipboard('tag1462');return false;" class="tag-decoration">testing-v0.24.2475</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/33cc09964cfc21191a059929ccfe198bb87b71d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32938660291" target="_blank">2026-08-26 06:33:17</a></td></tr>
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
