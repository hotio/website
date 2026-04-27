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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24593" onclick="CopyToClipboard('tag24593');return false;" class="tag-decoration">release</div><div id="tag16017" onclick="CopyToClipboard('tag16017');return false;" class="tag-decoration">release-f5141d9</div><div id="tag17124" onclick="CopyToClipboard('tag17124');return false;" class="tag-decoration">release-0.24.1787</div><div id="tag16129" onclick="CopyToClipboard('tag16129');return false;" class="tag-decoration">release-v0</div><div id="tag23076" onclick="CopyToClipboard('tag23076');return false;" class="tag-decoration">release-v0.24</div><div id="tag23504" onclick="CopyToClipboard('tag23504');return false;" class="tag-decoration">release-v0.24.1787</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f5141d99d958b3ec64c9d6ededbfe68762541f9a" target="_blank">Version update: 0.24.1779 => 0.24.1787</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24980086206" target="_blank">2026-04-27 06:31:56</a></td></tr>
<tr><td><div id="tag25975" onclick="CopyToClipboard('tag25975');return false;" class="tag-decoration">testing</div><div id="tag20204" onclick="CopyToClipboard('tag20204');return false;" class="tag-decoration">testing-ad04672</div><div id="tag23540" onclick="CopyToClipboard('tag23540');return false;" class="tag-decoration">testing-0.24.1779</div><div id="tag5791" onclick="CopyToClipboard('tag5791');return false;" class="tag-decoration">testing-v0</div><div id="tag15635" onclick="CopyToClipboard('tag15635');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4561" onclick="CopyToClipboard('tag4561');return false;" class="tag-decoration">testing-v0.24.1779</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ad046724586ca789a581d5e83b78748e497193f7" target="_blank">Version update: 0.24.1764 => 0.24.1779</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24949926212" target="_blank">2026-04-26 06:15:12</a></td></tr>
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
