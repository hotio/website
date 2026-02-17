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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13758" onclick="CopyToClipboard('tag13758');return false;" class="tag-decoration">release</div><div id="tag5051" onclick="CopyToClipboard('tag5051');return false;" class="tag-decoration">release-062ed0e</div><div id="tag15228" onclick="CopyToClipboard('tag15228');return false;" class="tag-decoration">release-0.24.1140</div><div id="tag6238" onclick="CopyToClipboard('tag6238');return false;" class="tag-decoration">release-v0</div><div id="tag32195" onclick="CopyToClipboard('tag32195');return false;" class="tag-decoration">release-v0.24</div><div id="tag7613" onclick="CopyToClipboard('tag7613');return false;" class="tag-decoration">release-v0.24.1140</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/062ed0ee74b43f3b13d9968bf3d22bc169110f15" target="_blank">Version update: 0.24.1127 => 0.24.1140</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22089131327" target="_blank">2026-02-17 07:05:29</a></td></tr>
<tr><td><div id="tag31307" onclick="CopyToClipboard('tag31307');return false;" class="tag-decoration">testing</div><div id="tag22458" onclick="CopyToClipboard('tag22458');return false;" class="tag-decoration">testing-cc6a164</div><div id="tag4290" onclick="CopyToClipboard('tag4290');return false;" class="tag-decoration">testing-0.24.1140</div><div id="tag5573" onclick="CopyToClipboard('tag5573');return false;" class="tag-decoration">testing-v0</div><div id="tag5670" onclick="CopyToClipboard('tag5670');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15280" onclick="CopyToClipboard('tag15280');return false;" class="tag-decoration">testing-v0.24.1140</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/cc6a164c86362a34154fb318c874c63199258a28" target="_blank">Version update: 0.24.1127 => 0.24.1140</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22089132010" target="_blank">2026-02-17 07:05:31</a></td></tr>
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
