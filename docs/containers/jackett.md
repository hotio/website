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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13427" onclick="CopyToClipboard('tag13427');return false;" class="tag-decoration">release</div><div id="tag8743" onclick="CopyToClipboard('tag8743');return false;" class="tag-decoration">release-befc75c</div><div id="tag5053" onclick="CopyToClipboard('tag5053');return false;" class="tag-decoration">release-0.25.34</div><div id="tag31326" onclick="CopyToClipboard('tag31326');return false;" class="tag-decoration">release-v0</div><div id="tag8934" onclick="CopyToClipboard('tag8934');return false;" class="tag-decoration">release-v0.25</div><div id="tag30410" onclick="CopyToClipboard('tag30410');return false;" class="tag-decoration">release-v0.25.34</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/befc75c5582053bf08918af5752273ce7095477a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45460106260" target="_blank">2026-11-24 18:29:27</a></td></tr>
<tr><td><div id="tag21437" onclick="CopyToClipboard('tag21437');return false;" class="tag-decoration">testing</div><div id="tag952" onclick="CopyToClipboard('tag952');return false;" class="tag-decoration">testing-751f5d9</div><div id="tag32600" onclick="CopyToClipboard('tag32600');return false;" class="tag-decoration">testing-0.25.34</div><div id="tag13163" onclick="CopyToClipboard('tag13163');return false;" class="tag-decoration">testing-v0</div><div id="tag31352" onclick="CopyToClipboard('tag31352');return false;" class="tag-decoration">testing-v0.25</div><div id="tag11872" onclick="CopyToClipboard('tag11872');return false;" class="tag-decoration">testing-v0.25.34</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/751f5d9e754de26c42fa7a039215ab54e7b52217" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45535951521" target="_blank">2026-11-25 02:51:50</a></td></tr>
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
