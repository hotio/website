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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10630" onclick="CopyToClipboard('tag10630');return false;" class="tag-decoration">release</div><div id="tag28607" onclick="CopyToClipboard('tag28607');return false;" class="tag-decoration">release-7103e29</div><div id="tag17891" onclick="CopyToClipboard('tag17891');return false;" class="tag-decoration">release-0.24.2624</div><div id="tag20639" onclick="CopyToClipboard('tag20639');return false;" class="tag-decoration">release-v0</div><div id="tag25233" onclick="CopyToClipboard('tag25233');return false;" class="tag-decoration">release-v0.24</div><div id="tag8956" onclick="CopyToClipboard('tag8956');return false;" class="tag-decoration">release-v0.24.2624</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7103e290270450c021e4c16693480ebce600a59a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35436255657" target="_blank">2026-09-19 10:01:08</a></td></tr>
<tr><td><div id="tag7656" onclick="CopyToClipboard('tag7656');return false;" class="tag-decoration">testing</div><div id="tag17337" onclick="CopyToClipboard('tag17337');return false;" class="tag-decoration">testing-64d2f40</div><div id="tag2986" onclick="CopyToClipboard('tag2986');return false;" class="tag-decoration">testing-0.24.2627</div><div id="tag5040" onclick="CopyToClipboard('tag5040');return false;" class="tag-decoration">testing-v0</div><div id="tag8715" onclick="CopyToClipboard('tag8715');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30818" onclick="CopyToClipboard('tag30818');return false;" class="tag-decoration">testing-v0.24.2627</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/64d2f40d8bc8b18de673c390446640f921e4e0aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35498712893" target="_blank">2026-09-20 08:07:45</a></td></tr>
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
