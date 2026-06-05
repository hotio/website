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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21248" onclick="CopyToClipboard('tag21248');return false;" class="tag-decoration">release</div><div id="tag21233" onclick="CopyToClipboard('tag21233');return false;" class="tag-decoration">release-088f6ff</div><div id="tag5591" onclick="CopyToClipboard('tag5591');return false;" class="tag-decoration">release-0.24.2021</div><div id="tag20292" onclick="CopyToClipboard('tag20292');return false;" class="tag-decoration">release-v0</div><div id="tag6149" onclick="CopyToClipboard('tag6149');return false;" class="tag-decoration">release-v0.24</div><div id="tag21189" onclick="CopyToClipboard('tag21189');return false;" class="tag-decoration">release-v0.24.2021</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/088f6ffcdfa22d08f12ce47bbd396dc225040adc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27000582713" target="_blank">2026-06-05 07:00:48</a></td></tr>
<tr><td><div id="tag4257" onclick="CopyToClipboard('tag4257');return false;" class="tag-decoration">testing</div><div id="tag7641" onclick="CopyToClipboard('tag7641');return false;" class="tag-decoration">testing-a570d68</div><div id="tag7540" onclick="CopyToClipboard('tag7540');return false;" class="tag-decoration">testing-0.24.2014</div><div id="tag10265" onclick="CopyToClipboard('tag10265');return false;" class="tag-decoration">testing-v0</div><div id="tag10046" onclick="CopyToClipboard('tag10046');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28321" onclick="CopyToClipboard('tag28321');return false;" class="tag-decoration">testing-v0.24.2014</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a570d681d29dc48b8fabdfc1a5137c07e5a50ae0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26937018979" target="_blank">2026-06-04 07:18:30</a></td></tr>
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
