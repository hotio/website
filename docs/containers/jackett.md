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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7353" onclick="CopyToClipboard('tag7353');return false;" class="tag-decoration">release</div><div id="tag16030" onclick="CopyToClipboard('tag16030');return false;" class="tag-decoration">release-cd74c7a</div><div id="tag9030" onclick="CopyToClipboard('tag9030');return false;" class="tag-decoration">release-0.24.1870</div><div id="tag31655" onclick="CopyToClipboard('tag31655');return false;" class="tag-decoration">release-v0</div><div id="tag23430" onclick="CopyToClipboard('tag23430');return false;" class="tag-decoration">release-v0.24</div><div id="tag24693" onclick="CopyToClipboard('tag24693');return false;" class="tag-decoration">release-v0.24.1870</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/cd74c7aa7e3fb1b17f419e2c9420363bf33cf7d1" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25986502182" target="_blank">2026-05-17 08:59:09</a></td></tr>
<tr><td><div id="tag3713" onclick="CopyToClipboard('tag3713');return false;" class="tag-decoration">testing</div><div id="tag25270" onclick="CopyToClipboard('tag25270');return false;" class="tag-decoration">testing-a4216a6</div><div id="tag2673" onclick="CopyToClipboard('tag2673');return false;" class="tag-decoration">testing-0.24.1870</div><div id="tag17914" onclick="CopyToClipboard('tag17914');return false;" class="tag-decoration">testing-v0</div><div id="tag22746" onclick="CopyToClipboard('tag22746');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11498" onclick="CopyToClipboard('tag11498');return false;" class="tag-decoration">testing-v0.24.1870</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a4216a6d8acf4b02f169c769eefb004c040387b0" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25986502944" target="_blank">2026-05-17 08:59:11</a></td></tr>
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
