---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8690" onclick="CopyToClipboard('tag8690');return false;" class="tag-decoration">nightly</div><div id="tag18564" onclick="CopyToClipboard('tag18564');return false;" class="tag-decoration">nightly-17dcff49b25aaf3988bbc28f46175981908f9211</div><div id="tag23232" onclick="CopyToClipboard('tag23232');return false;" class="tag-decoration">nightly-06d6270</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/06d62706dd7ae22f149b371a11e55181d20d8234" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20770107036" target="_blank">2026-01-07 03:57:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15880" onclick="CopyToClipboard('tag15880');return false;" class="tag-decoration">release</div><div id="tag6747" onclick="CopyToClipboard('tag6747');return false;" class="tag-decoration">release-4.5.5</div><div id="tag1101" onclick="CopyToClipboard('tag1101');return false;" class="tag-decoration">release-bc91289</div><div id="tag25400" onclick="CopyToClipboard('tag25400');return false;" class="tag-decoration">release-v4</div><div id="tag25853" onclick="CopyToClipboard('tag25853');return false;" class="tag-decoration">release-v4.5</div><div id="tag13431" onclick="CopyToClipboard('tag13431');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bc912893ddc6f35e1b054aa1ad97d1e62a3a6392" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20770107223" target="_blank">2026-01-07 03:57:52</a></td></tr>
<tr><td><div id="tag15587" onclick="CopyToClipboard('tag15587');return false;" class="tag-decoration">testing</div><div id="tag28846" onclick="CopyToClipboard('tag28846');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag4399" onclick="CopyToClipboard('tag4399');return false;" class="tag-decoration">testing-78037c8</div></td><td>Pre-releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690837366" target="_blank">2026-01-04 09:26:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name sabnzbd \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
