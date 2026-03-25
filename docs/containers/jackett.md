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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11496" onclick="CopyToClipboard('tag11496');return false;" class="tag-decoration">release</div><div id="tag20665" onclick="CopyToClipboard('tag20665');return false;" class="tag-decoration">release-0a23e29</div><div id="tag3138" onclick="CopyToClipboard('tag3138');return false;" class="tag-decoration">release-0.24.1459</div><div id="tag30807" onclick="CopyToClipboard('tag30807');return false;" class="tag-decoration">release-v0</div><div id="tag9768" onclick="CopyToClipboard('tag9768');return false;" class="tag-decoration">release-v0.24</div><div id="tag4650" onclick="CopyToClipboard('tag4650');return false;" class="tag-decoration">release-v0.24.1459</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0a23e29aa1a36872852394407b6689f6252342bd" target="_blank">Version update: 0.24.1450 => 0.24.1459</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23529246523" target="_blank">2026-03-25 07:09:09</a></td></tr>
<tr><td><div id="tag5827" onclick="CopyToClipboard('tag5827');return false;" class="tag-decoration">testing</div><div id="tag891" onclick="CopyToClipboard('tag891');return false;" class="tag-decoration">testing-52f9ec0</div><div id="tag19352" onclick="CopyToClipboard('tag19352');return false;" class="tag-decoration">testing-0.24.1459</div><div id="tag16075" onclick="CopyToClipboard('tag16075');return false;" class="tag-decoration">testing-v0</div><div id="tag13521" onclick="CopyToClipboard('tag13521');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11225" onclick="CopyToClipboard('tag11225');return false;" class="tag-decoration">testing-v0.24.1459</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/52f9ec03380f7806504ff147e6862e140f311cbe" target="_blank">Version update: 0.24.1450 => 0.24.1459</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23529247660" target="_blank">2026-03-25 07:09:11</a></td></tr>
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
