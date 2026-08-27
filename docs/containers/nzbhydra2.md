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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20602" onclick="CopyToClipboard('tag20602');return false;" class="tag-decoration">release</div><div id="tag11372" onclick="CopyToClipboard('tag11372');return false;" class="tag-decoration">release-f8677ed</div><div id="tag14510" onclick="CopyToClipboard('tag14510');return false;" class="tag-decoration">release-8.9.0</div><div id="tag13562" onclick="CopyToClipboard('tag13562');return false;" class="tag-decoration">release-v8</div><div id="tag19754" onclick="CopyToClipboard('tag19754');return false;" class="tag-decoration">release-v8.9</div><div id="tag31818" onclick="CopyToClipboard('tag31818');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f8677eda3dd828984fca1271a09c49d0d8d73a3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/33126797818" target="_blank">2026-08-27 23:35:13</a></td></tr>
<tr><td><div id="tag3923" onclick="CopyToClipboard('tag3923');return false;" class="tag-decoration">testing</div><div id="tag6377" onclick="CopyToClipboard('tag6377');return false;" class="tag-decoration">testing-da0fd39</div><div id="tag778" onclick="CopyToClipboard('tag778');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag22147" onclick="CopyToClipboard('tag22147');return false;" class="tag-decoration">testing-v8</div><div id="tag31348" onclick="CopyToClipboard('tag31348');return false;" class="tag-decoration">testing-v8.9</div><div id="tag31029" onclick="CopyToClipboard('tag31029');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/da0fd39be838e3c1730b40fab13f5e75fca8e67e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/33078599496" target="_blank">2026-08-27 13:46:23</a></td></tr>
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
