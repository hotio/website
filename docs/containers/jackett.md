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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag232" onclick="CopyToClipboard('tag232');return false;" class="tag-decoration">release</div><div id="tag9131" onclick="CopyToClipboard('tag9131');return false;" class="tag-decoration">release-c209ff6</div><div id="tag24212" onclick="CopyToClipboard('tag24212');return false;" class="tag-decoration">release-0.24.1019</div><div id="tag30680" onclick="CopyToClipboard('tag30680');return false;" class="tag-decoration">release-v0</div><div id="tag21853" onclick="CopyToClipboard('tag21853');return false;" class="tag-decoration">release-v0.24</div><div id="tag4801" onclick="CopyToClipboard('tag4801');return false;" class="tag-decoration">release-v0.24.1019</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c209ff6e2ce01f0ae90b7b84ada094b8e9e6c785" target="_blank">Version update: 0.24.1012 => 0.24.1019</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21620590962" target="_blank">2026-02-03 07:06:00</a></td></tr>
<tr><td><div id="tag6715" onclick="CopyToClipboard('tag6715');return false;" class="tag-decoration">testing</div><div id="tag30046" onclick="CopyToClipboard('tag30046');return false;" class="tag-decoration">testing-65c7b5f</div><div id="tag5627" onclick="CopyToClipboard('tag5627');return false;" class="tag-decoration">testing-0.24.1012</div><div id="tag22272" onclick="CopyToClipboard('tag22272');return false;" class="tag-decoration">testing-v0</div><div id="tag28846" onclick="CopyToClipboard('tag28846');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11253" onclick="CopyToClipboard('tag11253');return false;" class="tag-decoration">testing-v0.24.1012</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/65c7b5f30b0f988707235bed6d00307e2217ffcd" target="_blank">Version update: 0.24.1008 => 0.24.1012</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21587674037" target="_blank">2026-02-02 11:07:50</a></td></tr>
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
