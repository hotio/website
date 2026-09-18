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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27000" onclick="CopyToClipboard('tag27000');return false;" class="tag-decoration">release</div><div id="tag25507" onclick="CopyToClipboard('tag25507');return false;" class="tag-decoration">release-df440d9</div><div id="tag10484" onclick="CopyToClipboard('tag10484');return false;" class="tag-decoration">release-0.24.2605</div><div id="tag27213" onclick="CopyToClipboard('tag27213');return false;" class="tag-decoration">release-v0</div><div id="tag5016" onclick="CopyToClipboard('tag5016');return false;" class="tag-decoration">release-v0.24</div><div id="tag4320" onclick="CopyToClipboard('tag4320');return false;" class="tag-decoration">release-v0.24.2605</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/df440d96d81644ca3968ade4d983a962ba1439f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35299319896" target="_blank">2026-09-18 02:26:16</a></td></tr>
<tr><td><div id="tag7580" onclick="CopyToClipboard('tag7580');return false;" class="tag-decoration">testing</div><div id="tag20171" onclick="CopyToClipboard('tag20171');return false;" class="tag-decoration">testing-aea01cc</div><div id="tag24248" onclick="CopyToClipboard('tag24248');return false;" class="tag-decoration">testing-0.24.2619</div><div id="tag9738" onclick="CopyToClipboard('tag9738');return false;" class="tag-decoration">testing-v0</div><div id="tag8306" onclick="CopyToClipboard('tag8306');return false;" class="tag-decoration">testing-v0.24</div><div id="tag648" onclick="CopyToClipboard('tag648');return false;" class="tag-decoration">testing-v0.24.2619</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/aea01cc2e623e401b5fe836c037a981a78154c38" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35321193830" target="_blank">2026-09-18 07:48:06</a></td></tr>
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
