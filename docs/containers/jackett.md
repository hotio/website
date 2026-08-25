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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4457" onclick="CopyToClipboard('tag4457');return false;" class="tag-decoration">release</div><div id="tag4823" onclick="CopyToClipboard('tag4823');return false;" class="tag-decoration">release-b544a17</div><div id="tag31562" onclick="CopyToClipboard('tag31562');return false;" class="tag-decoration">release-0.24.2457</div><div id="tag8183" onclick="CopyToClipboard('tag8183');return false;" class="tag-decoration">release-v0</div><div id="tag27956" onclick="CopyToClipboard('tag27956');return false;" class="tag-decoration">release-v0.24</div><div id="tag9995" onclick="CopyToClipboard('tag9995');return false;" class="tag-decoration">release-v0.24.2457</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b544a175f114737fb4300c963b3680648cb11075" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32698200058" target="_blank">2026-08-24 06:39:05</a></td></tr>
<tr><td><div id="tag8388" onclick="CopyToClipboard('tag8388');return false;" class="tag-decoration">testing</div><div id="tag12330" onclick="CopyToClipboard('tag12330');return false;" class="tag-decoration">testing-41daf5e</div><div id="tag12255" onclick="CopyToClipboard('tag12255');return false;" class="tag-decoration">testing-0.24.2467</div><div id="tag10521" onclick="CopyToClipboard('tag10521');return false;" class="tag-decoration">testing-v0</div><div id="tag24711" onclick="CopyToClipboard('tag24711');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28066" onclick="CopyToClipboard('tag28066');return false;" class="tag-decoration">testing-v0.24.2467</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/41daf5e87fadcb401026699a4048c48c4f016cf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32817334878" target="_blank">2026-08-25 06:31:18</a></td></tr>
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
