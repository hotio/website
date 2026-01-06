---
hide:
  - toc
title: hotio/qbitmanage
---

--8<-- "includes/header-links.md"

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
<tr><td><div id="tag31813" onclick="CopyToClipboard('tag31813');return false;" class="tag-decoration">nightly</div><div id="tag27073" onclick="CopyToClipboard('tag27073');return false;" class="tag-decoration">nightly-73fb96bfbad112e6b4a07c434abf7dfb09c65ba0</div><div id="tag5327" onclick="CopyToClipboard('tag5327');return false;" class="tag-decoration">nightly-7b9fa51</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/7b9fa5158767df467a6dc9589f863b34b0f65197">Version update: fd5c19562addb1ad84300b94d3ec35fa9e66d773 => 73fb96bfbad112e6b4a07c434abf7dfb09c65ba0</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20748248796">2026-01-06 12:26:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29929" onclick="CopyToClipboard('tag29929');return false;" class="tag-decoration">release</div><div id="tag10033" onclick="CopyToClipboard('tag10033');return false;" class="tag-decoration">release-4.6.5</div><div id="tag20381" onclick="CopyToClipboard('tag20381');return false;" class="tag-decoration">release-10107ad</div><div id="tag17982" onclick="CopyToClipboard('tag17982');return false;" class="tag-decoration">release-v4</div><div id="tag6446" onclick="CopyToClipboard('tag6446');return false;" class="tag-decoration">release-v4.6</div><div id="tag1196" onclick="CopyToClipboard('tag1196');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/null">Upstream image update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20690832479">2026-01-04 09:26:26</a></td></tr>
</tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-9.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name qbitmanage \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
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
