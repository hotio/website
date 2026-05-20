---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag558" onclick="CopyToClipboard('tag558');return false;" class="tag-decoration">release</div><div id="tag15604" onclick="CopyToClipboard('tag15604');return false;" class="tag-decoration">release-8e254f4</div><div id="tag25971" onclick="CopyToClipboard('tag25971');return false;" class="tag-decoration">release-8.8.1</div><div id="tag20018" onclick="CopyToClipboard('tag20018');return false;" class="tag-decoration">release-v8</div><div id="tag15830" onclick="CopyToClipboard('tag15830');return false;" class="tag-decoration">release-v8.8</div><div id="tag24158" onclick="CopyToClipboard('tag24158');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8e254f4ec5ccb59cccdfd48b077f9b34c8fb5a8d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/26184802940" target="_blank">2026-05-20 19:23:48</a></td></tr>
<tr><td><div id="tag3579" onclick="CopyToClipboard('tag3579');return false;" class="tag-decoration">testing</div><div id="tag32520" onclick="CopyToClipboard('tag32520');return false;" class="tag-decoration">testing-f93ba3c</div><div id="tag13944" onclick="CopyToClipboard('tag13944');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag31222" onclick="CopyToClipboard('tag31222');return false;" class="tag-decoration">testing-v8</div><div id="tag20542" onclick="CopyToClipboard('tag20542');return false;" class="tag-decoration">testing-v8.8</div><div id="tag23122" onclick="CopyToClipboard('tag23122');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f93ba3cb5e4fad47b6b09372f58d707c60599fb6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/26184809531" target="_blank">2026-05-20 19:23:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
